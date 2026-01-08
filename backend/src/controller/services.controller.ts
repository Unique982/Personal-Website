import { Request, Response } from "express";
import {
  createServicesScheme,
  servicesInputSchema,
  serviceUpdateInput,
  serviceUpdateSchema,
} from "../schema/services.schema";
import Services from "../model/service.model";
class ServicesController {
  // create services
  static async createServices(req: Request, res: Response) {
    const validatedData: servicesInputSchema = createServicesScheme.parse(
      req.body
    );
    const { title, description, status, features } = validatedData;
    const icon = req.file?.path;
    if (!icon) return res.status(400).json({ message: "Icon  is required 🤷‍♂️" });
    // check if skill name same or not
    const exists = await Services.findOne({
      title,
    });
    if (exists)
      return res
        .status(409)
        .json({ message: "This service  name already existing🤷‍♂️" });
    await Services.create({
      title,
      description,
      status,
      features,
      icon,
    });
    res.status(200).json({ message: "Service create successful😀" });
  }
  // fetch  services
  static async fetchServices(req: Request, res: Response) {
    const servicesData = await Services.find();
    res.status(200).json({
      message: "All services fetched successful😀",
      data: servicesData,
    });
  }
  // delete  services
  static async deleteServices(req: Request, res: Response) {
    const { id } = req.params;
    const services = await Services.findByIdAndDelete(id);
    if (!services)
      return res.status(404).json({ message: "Service id not found🤷‍♂️" });
    res.status(200).json({ message: "Services delete successfuyl😀" });
  }
  // update  services
  static async updateServices(req: Request, res: Response) {
    const { id } = req.params;
    const services = await Services.findById(id);
    if (!services)
      return res.status(404).json({ message: "Service id not found🤷‍♂️" });

    const validatedData: serviceUpdateInput = serviceUpdateSchema.parse(
      req.body
    );
    const { title, description, status, features } = validatedData;
    const icon = req.file?.path;
    if (title && title !== services.title) {
      const existSkill = await Services.findOne({
        title,
        _id: { $ne: id }, // exclude current record
      });

      if (existSkill) {
        return res
          .status(409)
          .json({ message: "Service name already exists 🤷‍♂️" });
      }

      services.title = title;
    }
    if (description) services.description = description;
    if (features) services.features = features as any;
    if (status) services.status = status;
    if (icon) services.icon = icon;

    await services.save();
    res.status(200).json({ message: "Service updated successful😀" });
  }
  // fetch  services details
  static async fetchServicesDetails(req: Request, res: Response) {
    const { id } = req.params;
    const services = await Services.findById(id);
    if (!services)
      return res.status(404).json({ message: "Service id not found🤷‍♂️" });
    res.status(200).json({
      message: "Service details fetched successful😀",
      data: services,
    });
  }
  static async statusServices(req: Request, res: Response) {
    const { id } = req.params;
    const services = await Services.findById(id);
    if (!services)
      return res.status(400).json({ message: "Services id not found🤷‍♂️" });

    // already read xaina vani only chnage hunxa
    services.status = services.status === "active" ? "inactive" : "active";
    await services.save();
    res
      .status(200)
      .json({ message: `Services status updated to "${services.status}" 😀` });
  }
}
export default ServicesController;
