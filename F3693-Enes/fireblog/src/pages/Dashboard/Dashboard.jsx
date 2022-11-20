import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import DashboardVeri from "../../helpers/DashboardVeri";
import { Cards, HomeCon } from "./Dashboard-styled";

function Dashboard() {
  const [modal, setModal] = useState(false);
  const { login } = useSelector((store) => store.login);
  const [data, setData] = useState("");
  useEffect(() => {
    DashboardVeri(setData);
  }, []);

  return (
    <HomeCon>
      {modal && <Modal />}
      <h3
        onClick={(e) => {
          setModal(true);
        }}
      >
        Dashboard
      </h3>
      <Cards>
        {data.data?.map((e, index) => (
          <Card key={index} e={e} />
        ))}
      </Cards>
    </HomeCon>
  );
}

export default Dashboard;
