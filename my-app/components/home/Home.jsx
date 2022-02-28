import React from "react";
import { NativeBaseProvider, Box } from "native-base";

const Home = () => {
  return (
    <Box flex="1">
      <Center h="50px">
        <Text>40% off for you 40% off for a friend </Text>
        <Text>Invite now</Text>
      </Center>
      <ScrollView horizontal="true">{/* plt top bar  */}</ScrollView>
      <Box>{/* collections carosel */}</Box>
<Box>
    {/* illsutration banner  */}
</Box>
<Box>
    {/* favoruites */}

</Box>
<Box>
    {/* shop by category */}
</Box>
<Box>

    {/* tinder  */}
</Box>

<Box>
    {/* promotional banner  */}
</Box>

<Box>
    <HStack>
            <Text>Your region</Text>

    </HStack>
</Box>

    </Box>
  );
};

export default Home;
