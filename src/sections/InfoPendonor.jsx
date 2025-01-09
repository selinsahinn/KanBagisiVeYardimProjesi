import { formatDate, getMaleAmount, getFemaleAmount } from "./functions";
import fakeApi from "../api/fakeApi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export const data = {
  labels: ["Erkek", "Kadın"],
  datasets: [
    {
      label: "Bağışta bulunanların cinsiyet oranı",
      data: [getMaleAmount(fakeApi), getFemaleAmount(fakeApi)],
      backgroundColor: ["rgba(128, 202, 255, 1)", "rgba(255, 175, 163, 1)"],
    },
  ],
};

const Dashboard = () => {
  return (
    <div>
      <div className="m-5 flex flex-col">
        <h1 className="text-2xl font-bold">Bağışçı Bilgileri</h1>
        <div className="border-2 border-text overflow-auto p-2 h-[300px]">
          <div className="border-[1px] rounded-xl">
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Th>Bağış Tarihi</Th>
                  <Th>Bağışçı Adı</Th>
                  <Th>Kan Grubu</Th>
                  <Th>Kan torbası Sayısı</Th>
                  <Th>Kanın Son Kullanma Tarihi</Th>
                  <Th>Cinsiyet</Th>
                  <Th>İşlem</Th>
                </Thead>
                <Tbody>
                  {fakeApi.map((content) => (
                    <Tr key={content.id}>
                      <Td>
                        <span className="text-brown">
                          {formatDate(content.tanggalDonor)}
                        </span>
                      </Td>
                      <Td>{content.namaPendonor}</Td>
                      <Td>
                        <span className="text-brown">{content.tipeDarah}</span>
                      </Td>
                      <Td>
                        <span className="text-brown">
                          {content.jumlahKantong}
                        </span>
                      </Td>
                      <Td>
                        <span className="text-brown">
                          {formatDate(content.expiredDarah)}
                        </span>
                      </Td>
                      <Td>
                        <span className="text-brown">
                          {content.jenisKelamin}
                        </span>
                      </Td>
                      <Td>
                        <span className="text-brown hover:underline cursor-pointer">
                          Silme
                        </span>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
      <div>
        <div className="m-5 flex items-center justify-center gap-7">
          <h1 className="font-bold text-4xl w-[50%]">
            Erkek ve Kadın Bağışçı Sayısının Yüzdesi
          </h1>
          <div>
            <Doughnut data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
