import React, { useState, useEffect } from "react";
import { Header, ProductBox } from "components";
import { Box, Container, Loader } from "ui-kit";
import { MovieResponse } from "lib/types/api";
import { getRequest } from "lib/api";

import * as S from "./styles";

const Home: React.FC = () => {
  const [data, setData] = useState<MovieResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest<MovieResponse[]>("products");
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      {loading ? (
        <S.LoaderContainer>
          <Loader />
        </S.LoaderContainer>
      ) : (
        <Box>
          <S.GridContainer>
            {data.map(item => (
              <ProductBox key={item.id} item={item} />
            ))}
          </S.GridContainer>
        </Box>
      )}
    </Container>
  );
};

export default Home;
