import { SafeAreaView, StatusBar, Text, View, ScrollView } from 'react-native';
import Grandma from '../components/illustrations/grandman';
import Button from '../components/Button';
import { router } from 'expo-router';

export default function Index() {
  return (
    <>
      <StatusBar backgroundColor='#ffffff' barStyle='dark-content' />
      <SafeAreaView style={{ backgroundColor: '#ffffff', height: '100%' }}>
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              paddingVertical: StatusBar.currentHeight,
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                flex: 1,
              }}
            >
              <Grandma style={{ marginTop: 60 }} />
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{
                    width: '90%',
                    color: '#121212',
                    fontWeight: '700',
                    fontSize: 24,
                    textAlign: 'center',
                  }}
                >
                  Ler agora ficou mais fácil
                </Text>
                <Text
                  style={{
                    color: '#a5a5a5',
                    fontWeight: '400',
                    fontSize: 16,
                    textAlign: 'center',
                  }}
                >
                  Descubra novos mundos, junte-se a uma comunidade apaixonada
                  por leitura. Comece sua aventura literária sem complicações
                  aqui.
                </Text>
              </View>
              <Button onPress={() => router.push('/sign-in')}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: 16,
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  Continuar
                </Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
