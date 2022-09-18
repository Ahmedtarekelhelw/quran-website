import React from "react";
import "./style.scss";
import {
  FiSettings,
  FiMail,
  FiUsers,
  FiVideo,
  FiArrowDownCircle,
  FiArrowUpCircle,
  FiFilter,
} from "react-icons/fi";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUnorderedList,
  AiOutlineCalendar,
} from "react-icons/ai";
import { TbCheckbox } from "react-icons/tb";
import { BsBook } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { IoMdStats } from "react-icons/io";
import { MdOutlineLanguage, MdLogout } from "react-icons/md";
import { BiRss } from "react-icons/bi";
import { CgBox } from "react-icons/cg";

const SideBar = () => {
  return (
    <aside>
      <div className="wrapper">
        <div className="sidebar-user">
          <div className="setting-icon">
            <FiSettings />
          </div>
          <div className="sidebar-user-info">
            <div className="sidebar-user-info-img">
              <img src="" alt="" />
            </div>
            <span className="status">متصل</span>
            <h3>احمد طارق</h3>
            <h4>المشرف العام</h4>
          </div>
        </div>
        <div className="sidebar-link">
          <ul className="main-link">
            <li>
              <AiOutlineHome />
              <span>لوحه القياده</span>
            </li>
            <li>
              <FiMail />
              <span> الرسائل</span>
            </li>
            <li>
              <FiSettings />
              <span> الاعدادات</span>
            </li>
          </ul>
          <ul className="link">
            <h3> الشؤون الإدارية</h3>
            <li>
              <AiOutlineUser />
              <span> الطلاب</span>
            </li>
            <li>
              <AiOutlineUser />
              <span> المعلمين</span>
            </li>
            <li>
              <AiOutlineUser />
              <span> أولياء أمور</span>
            </li>
            <li>
              <AiOutlineUnorderedList />
              <span> الحلقات</span>
            </li>
            <li>
              <FiUsers />
              <span> الموظفين</span>
            </li>
          </ul>
          <ul className="link">
            <h3>الشؤون التعليمية</h3>
            <li>
              <FiVideo />
              <span> المقرأة الإلكترونية</span>
            </li>
            <li>
              <TbCheckbox />
              <span> الحفظ والمراجعة</span>
            </li>
            <li>
              <AiOutlineCalendar />
              <span> الحضور والغياب</span>
            </li>
            <li>
              <BsBook />
              <span> الخطط والمقررات</span>
            </li>
            <li>
              <GrDocumentText />
              <span> التقارير</span>
            </li>
            <li>
              <IoMdStats />
              <span> الإحصاءات</span>
            </li>
          </ul>

          <ul className="link">
            <h3>إدارة المحتوى</h3>
            <li>
              <MdOutlineLanguage />
              <span>الموقع الالكتروني</span>
            </li>
            <li>
              <BiRss />
              <span> الأخبار والإعلانات </span>
            </li>
            <li>
              <BsBook />
              <span> المكتبة</span>
            </li>
          </ul>

          <ul className="link">
            <h3> الشؤون المالية</h3>
            <li>
              <CgBox />
              <span> اشتراكات الطلاب</span>
            </li>
            <li>
              <FiArrowUpCircle />
              <span>المداخيل </span>
            </li>
            <li>
              <FiArrowDownCircle />
              <span> المصاريف</span>
            </li>
            <li>
              <FiFilter />
              <span> التقارير المالية</span>
            </li>
          </ul>

          <ul className="link">
            <li>
              <AiOutlineUser />
              <span>الملف الشخصي</span>
            </li>
            <li>
              <MdLogout />
              <span>تسجيل الخروج </span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
