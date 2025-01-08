import dashboard from "../assets/dashboard.svg";
import homepage from "../assets/homepage.svg";
import info from "../assets/info.svg";
import kadar from "../assets/kadar.svg";
import stokdarah from "../assets/stokdarah.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [selectNum, setSelectNum] = useState(null);

  return (
    <div className="py-8 px-[3rem] 2xl:px-[5rem] bg-background2 flex justify-center items-left gap-7 flex-col h-[100vh]">
      <Link
        className={`p-4 xl:px-[auto] rounded-[30px] flex items-center gap-5 ${
          selectNum === 5 && "bg-primary"
        }`}
        onClick={() => setSelectNum(5)}
        to="/anasayfa"
      >
        <img src={homepage} alt="" className="w-[20px] xl:w-[50px]" />
        <h1 className="text-xl xl:text-2xl font-medium">Anasayfa</h1>
      </Link>
      <Link
        className={`p-4 xl:px-[auto] rounded-[30px] flex items-center gap-5 ${
          selectNum === 1 && "bg-primary"
        }`}
        onClick={() => setSelectNum(1)}
        to="/kontrolpaneli"
      >
        <img src={dashboard} alt="" className="w-[20px] xl:w-[50px]" />
        <h1 className="text-xl xl:text-2xl font-medium">Kontrol Paneli</h1>
      </Link>
      <Link
        className={`p-4 xl:px-[auto] rounded-[30px] flex items-center gap-5 ${
          selectNum === 2 && "bg-primary"
        }`}
        onClick={() => setSelectNum(2)}
        to="/kanstogu"
      >
        <img src={stokdarah} alt="" className="w-[20px] xl:w-[50px]" />
        <h1 className="text-xl xl:text-2xl font-medium">Kan Stoğu</h1>
      </Link>
      <Link
        className={`p-4 px-[2rem] xl:px-[auto] rounded-[30px] flex items-center gap-5 ${
          selectNum === 3 && "bg-primary"
        }`}
        onClick={() => setSelectNum(3)}
        to="/bagiscibilgileri"
      >
        <img src={info} alt="" className="w-[20px] xl:w-[50px]" />
        <h1 className="text-xl xl:text-2xl font-medium">Bağışçı Bilgileri</h1>
      </Link>
      <Link
        className={`p-4 xl:px-[auto] rounded-[30px] flex items-center gap-5 ${
          selectNum === 4 && "bg-primary"
        }`}
        onClick={() => setSelectNum(4)}
        to="/sonkullanmatarihianalizi"
      >
        <img src={kadar} alt="" className="w-[20px] xl:w-[50px]" />
        <h1 className="text-xl xl:text-2xl font-medium">
          Son Kullanma Tarihi Analizi
        </h1>
      </Link>
    </div>
  );
};

export default Sidebar;
