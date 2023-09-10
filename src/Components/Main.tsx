import {
  Body,
  Button,
  Form,
  Heading,
  Input,
  TD,
  TH,
  Table,
} from "./Ui Components";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { useState, useEffect } from "react";
import LazyLoading from "./LazyLoading";
// interface filters {
//   text?: string;
//   year?: number;
//   month?: number;
//   day?: string;
//   offset?: number;
// }
const Main = () => {
  const axios = useAxios();
  const [text, setText] = useState<string>("faisal");
  const [offset, setOffset] = useState<number>(0);
  const { isLoading, isError, error, data, isRefetching, isFetching, refetch } =
    useQuery({
      queryKey: ["history-timeline"],
      queryFn: async (): Promise<any> => {
        return await axios.get(
          "https://api.api-ninjas.com/v1/historicalevents",
          {
            params: { offset, text },
          }
        );
      },
      enabled: true,
    });
  const handleSubmit = () => {
    setOffset(0);
    refetch();
  };
  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const next = () => {
    setOffset((prevOffset) => prevOffset + 1);
  };

  const prev = () => {
    setOffset((prevOffset) => (prevOffset > 0 ? prevOffset - 1 : 0));
  };

  useEffect(() => {
    refetch();
  }, [offset]);
  // return <LazyLoading />;

  return (
    <Body>
      <Form>
        <Heading>
          <h2>TimeLine Explorer</h2>
        </Heading>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <Input
            type="text"
            placeholder="Enter Text to Search"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyPress={handleInputKeyPress}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
        <div style={{ margin: "15px" }}>
          {isFetching || isRefetching || isLoading || isError || error ? (
            <LazyLoading />
          ) : (
            <>
              <Table>
                <thead>
                  <tr>
                    <TH>Day</TH>
                    <TH>Month</TH>
                    <TH>Year</TH>
                    <TH>Event</TH>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((element: any, index: number) => {
                    return (
                      <tr key={index}>
                        <TD>{element.day}</TD>
                        <TD>{element.month}</TD>
                        <TD>{element.year}</TD>
                        <TD>{element.event}</TD>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              {data && (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button style={{ minWidth: "100px" }} onClick={prev}>
                    Previous
                  </Button>
                  <Button style={{ minWidth: "100px" }} onClick={next}>
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </Form>
    </Body>
  );
};
export default Main;
