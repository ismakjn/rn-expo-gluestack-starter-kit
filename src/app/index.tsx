import React from "react";
import { Box } from "@/src/components/ui/box";
import { Text } from "@/src/components/ui/text";
import {SafeAreaView} from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView className={'h-full'}>
      <Box className="h-full items-center justify-center p-4">
        <Text size={'3xl'}>It works</Text>
      </Box>
    </SafeAreaView>
  )
}
export default Index
