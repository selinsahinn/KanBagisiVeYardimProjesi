import DataCard from "../components/DataCard";
import { fakeApiTwo } from "../api/fakeApiTwo";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const AnalisisKadaluarsa = () => {
  return (
    <div>
      <div className="p-12">
        <h1 className="text-2xl font-bold">Son kullanma tarihi analizi</h1>
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <DataCard
            text1="Toplam"
            text2={`${fakeApiTwo.length}`}
            color="bg-primary"
          />
          <DataCard
            text1="7 Gün İçinde Son Kullanma Tarihi Geçecek"
            text2={`${fakeApiTwo.length}`}
            color="bg-danger text-background"
          />
        </div>
      </div>
      <div className="px-12">
        <h1 className="text-2xl font-bold">
          Yakında son kullanma tarihi geçecek
        </h1>
        <div className="border-[1px] overflow-auto h-[500px] rounded-xl">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Th>Kan Grubu</Th>
                <Th>Son Kullanma Tarihi</Th>
                <Th>Birimler</Th>
              </Thead>
              <Tbody>
                {fakeApiTwo.map((content) => (
                  <Tr key={content.id}>
                    <Td>{content.tipeDarah}</Td>
                    <Td>
                      <span className="text-brown">{content.expDate}</span>
                    </Td>
                    <Td>
                      <span className="text-brown hover:underline cursor-pointer">
                        {content.jumlahKantong}
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
  );
};

export default AnalisisKadaluarsa;
