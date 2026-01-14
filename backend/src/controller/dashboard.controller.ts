import { IExtendRequest } from "../middleware/authMiddlewre";
import { Response } from "express";
import Contact from "../model/contact.model";
import Project from "../model/project.model";
import Blog from "../model/blog.model";
import visitorCount from "../model/visitorCount.model";

class DashboardOverview {
  static async getDashboardData(req: IExtendRequest, res: Response) {
    const totalContact = await Contact.countDocuments();
    const totalProject = await Project.countDocuments();
    const totalBlog = await Blog.countDocuments();
    const totalVisitor = await visitorCount.countDocuments();

    // month, hrs , day visitor count
    const today = new Date();

    // daily traffic last 7 day

    const dailyTraffic = [];
    for (let i = 6; i > 0; i--) {
      const dayStart = new Date(today);
      dayStart.setDate(today.getDate() - i);
      dayStart.setHours(0, 0, 0, 0);

      const dayEnd = new Date(dayStart);
      dayEnd.setHours(23, 59, 59, 999);

      // count documents in vistor collection store db
      const count = await visitorCount.countDocuments({
        date: { $gte: dayStart, $lte: dayEnd },
      });
      dailyTraffic.push({
        date: dayStart.toISOString().split("T")[0],
        count,
      });
    }

    // monthly traffic fro current month
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthEnd = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0,
      29,
      59,
      59,
      999
    );
    const monthlyTraffic = await visitorCount.countDocuments({
      date: { $gte: monthStart, $lte: monthEnd },
    });

    // hourly traffic for today
    const hourlyTraffic = [];
    for (let h = 0; h < 24; h++) {
      const start = new Date(today);
      start.setHours(h, 0, 0, 0);
      const end = new Date(today);
      end.setHours(h, 59, 59, 999);
      const count = await visitorCount.countDocuments({
        date: { $gte: start, $lte: end },
      });
      hourlyTraffic.push({ hour: h, count });
    }

    res.status(200).json({
      message: "Dahboard data",
      totalContact,
      totalProject,
      totalBlog,
      totalVisitor,
      dailyTraffic,
      hourlyTraffic,
      monthlyTraffic,
    });
  }
}
export default DashboardOverview;
