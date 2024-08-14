import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function FormField({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={[{ gap: 8 }, otherStyles]}>
      <Text style={{ fontSize: 16, color: '#121212', fontWeight: '500' }}>
        {title}
      </Text>
      <View
        style={{
          backgroundColor: '#f9f9f9',
          height: 56,
          borderRadius: 8,
          paddingHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TextInput
          style={{ flex: 1, fontSize: 16, fontWeight: '500' }}
          placeholder={placeholder}
          value={value}
          placeholderTextColor='#b7b7b7'
          onChangeText={handleChangeText}
          secureTextEntry={keyboardType === 'password' && !showPassword}
          keyboardType={keyboardType}
        />

        {keyboardType === 'password' && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ color: '#121212', fontSize: 16, fontWeight: '600' }}
          >
            <Text>
              {showPassword ? (
                <Ionicons name='eye-off' size={24} color='#b8b8b8' />
              ) : (
                <Ionicons name='eye' size={24} color='#b8b8b8' />
              )}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
