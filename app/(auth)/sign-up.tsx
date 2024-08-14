import Button from '@/components/Button';
import FormField from '@/components/FormField';
import { Google } from '@/components/illustrations/google';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <>
      <StatusBar backgroundColor='#ffffff' barStyle='dark-content' />
      <SafeAreaView style={{ height: '100%', backgroundColor: '#ffffff' }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              paddingHorizontal: 16,
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: '700' }}>Criar conta</Text>
            <Text
              style={{
                color: '#a5a5a5',
                fontWeight: '400',
                fontSize: 16,
              }}
            >
              Crie sua conta e comece a desfrutar
            </Text>
            <View style={{ marginTop: 24, gap: 16, marginBottom: 24 }}>
              <FormField
                title='Nome'
                value={form.name}
                placeholder='Nome'
                handleChangeText={(e) => setForm({ ...form, name: e })}
                otherStyles={{}}
                keyboardType='default'
              />
              <FormField
                title='Email'
                value={form.email}
                placeholder='Email'
                handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles={{}}
                keyboardType='email-address'
              />
              <FormField
                title='Palavra-passe'
                value={form.password}
                placeholder='Palavra-passe'
                handleChangeText={(e) => setForm({ ...form, password: e })}
                otherStyles={{}}
                keyboardType='password'
              />
            </View>
            <Button rounded onPress={handleSubmit}>
              <Text
                style={{ color: '#ffffff', fontWeight: '600', fontSize: 16 }}
              >
                Criar conta
              </Text>
            </Button>
            <Link
              href='/sign-in'
              style={{
                color: '#a5a5a5',
                fontWeight: '600',
                fontSize: 16,
                textAlign: 'center',
                paddingVertical: 16,
              }}
            >
              Já tem uma conta?
              <Text style={{ color: '#54408C' }}> Entrar</Text>
            </Link>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 20,
                flexDirection: 'row',
                gap: 16,
              }}
            >
              <View
                style={{ width: '100%', height: 1, backgroundColor: '#e8e8e8' }}
              ></View>
              <Text style={{ color: '#a5a5a5', fontWeight: '500' }}>Ou</Text>
              <View
                style={{ width: '100%', height: 1, backgroundColor: '#e8e8e8' }}
              ></View>
            </View>
            <View style={{ gap: 8 }}>
              <Button variant='social' rounded>
                <Ionicons name='logo-google' size={20} />
                <Text style={{ color: '#000', fontSize: 14, fontWeight: 500 }}>
                  Entrar com Google
                </Text>
              </Button>
            </View>
            <Link
              href='/'
              style={{
                color: '#a5a5a5',
                fontWeight: '500',
                fontSize: 14,
                textAlign: 'center',
                paddingVertical: 16,
                lineHeight: 20,
                marginTop: 16,
              }}
            >
              Ao criar uma conta, você concorda com nossos
              <Text style={{ color: '#54408C' }}>
                {' '}
                Termos e Políticas de Dados
              </Text>
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
