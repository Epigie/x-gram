import React, { useEffect, useState } from 'react'
import './Translations/i18n'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Application } from './Navigators'
import { diaLogStore, rehydrateStore } from './Stores'
import { SplashScreen } from './Screens'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Layout } from './Theme'
import Animated, { FadeIn } from 'react-native-reanimated'
import AppDiaLog from './Components/AppDiaLog'
import { PortalProvider } from '@gorhom/portal'
import { Obx } from './Components'
const App = () => {
  const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    rehydrateStore()
      .then(() => setTimeout(() => setIsReady(true), 1000))
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <GestureHandlerRootView style={Layout.fill}>
      <SafeAreaProvider>
        <PortalProvider>
          {isReady ? (
            <Animated.View style={Layout.fill} entering={FadeIn}>
              <Application />
            </Animated.View>
          ) : (
            <SplashScreen />
          )}
          <Obx>
            {() =>
              diaLogStore.show && (
                <AppDiaLog
                  title={diaLogStore.title}
                  message={diaLogStore.message}
                  onPress={() => {
                    diaLogStore.onPress()
                    diaLogStore.closeDiaLog()
                  }}
                  buttonCustom={diaLogStore.buttonCustom}
                  buttonProps={diaLogStore.buttonProps}
                  buttonText={diaLogStore.buttonText}
                  customMessage={diaLogStore.customMessage}
                  dialogIcon={diaLogStore.dialogIcon}
                  footer={diaLogStore.footer}
                  hideCloseButton={diaLogStore.hideCloseButton}
                  messageColor={diaLogStore.messageColor}
                  messageStyle={diaLogStore.messageStyle}
                  showTime={diaLogStore.showTime}
                  backdropForClosing={diaLogStore.backdropForClosing}
                  titleColor={diaLogStore.titleColor}
                  onClose={() => diaLogStore.closeDiaLog()}
                />
              )
            }
          </Obx>
        </PortalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App