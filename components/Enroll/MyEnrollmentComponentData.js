//Chakra UI
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";

const MyEnrollmentComponentData = ({ data }) => {
  console.log("data", data);
  return (
    <div>
      <br />
      <br />
      <Box mb={{ base: 5, md: 40 }}>
        <Center>
          <Stack>
            <Text fontSize="xl" fontWeight="black">
              My Enrollments
            </Text>

            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Course enrolled</Th>
                    <Th>Enrollment start date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((data, index) => (
                    <Tr key={index}>
                      <Td>{data.slug}</Td>
                      <Td>{data.enrollment_start_date}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Stack>
        </Center>
      </Box>
    </div>
  );
};

export default MyEnrollmentComponentData;
