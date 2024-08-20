import { useEffect } from "react"
import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import React from "react"

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout
