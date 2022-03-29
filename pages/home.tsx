import { Box, Button } from "@mui/material";
import { logoutUser } from "@redux/slices/Auth/Auth";
import React from "react";
import { useDispatch } from "react-redux";
import HomeLayout from "src/components/Layouts/HomeLayout/Index";

import { useRouter } from "next/router";
type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <HomeLayout>
      <Box component="div" sx={{ height: "200vh" }}>
        <Button
          onClick={() => {
            dispatch(logoutUser());
            router.push("/");
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi esse
          reiciendis expedita excepturi ut ea quisquam alias voluptas. Illo
          repudiandae, eaque sint exercitationem assumenda ab tenetur? Qui
          expedita eius, saepe esse doloribus nesciunt odio, ullam, repudiandae
          nisi adipisci eaque delectus deleniti voluptatem ut magni aliquam?
          Amet ipsam, iusto omnis sit possimus quos maxime natus repellat fugiat
          in assumenda nesciunt facilis voluptas molestias nobis neque! Et, nisi
          voluptate cumque error expedita, animi aspernatur odit amet itaque,
          blanditiis exercitationem veritatis commodi aut eos delectus. Eius sit
          ducimus dolorum accusantium aspernatur placeat ab, distinctio eos modi
          accusamus quos pariatur commodi tempore laborum harum nihil quibusdam,
          molestias culpa ipsum impedit deserunt nesciunt vel. Ullam corporis
          soluta earum voluptate sint ipsum blanditiis doloribus magni quisquam
          sapiente natus temporibus minima enim illum recusandae modi pariatur
          quia, suscipit est non id? Soluta eius commodi ex ullam debitis
          corrupti, beatae consequuntur porro voluptatibus nobis accusantium
          laboriosam inventore, sapiente ipsa animi at architecto exercitationem
          ipsam? Quas sunt reprehenderit quos soluta officiis ratione nobis hic
          vero adipisci? Cum laudantium officiis eligendi facilis vitae aliquam
          nihil id, eaque suscipit laborum sapiente, accusantium adipisci a
          magnam accusamus. Aspernatur, perspiciatis animi? Consectetur
          reprehenderit ducimus perferendis corporis architecto laborum corrupti
          dolores tempore ipsa nemo?
        </Button>
      </Box>
    </HomeLayout>
  );
};

export default Home;
