import { Pressable, StyleSheet } from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'social';
  rounded?: boolean;
}

export default function Button(props: ButtonProps) {
  const variants = props.variant ? styles[props.variant] : styles.primary;

  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.8 : 1 },
        { borderRadius: props.rounded ? 100 : 12 },
        styles.button,
        variants
      ]}
    >
      {props.children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primary: {
    backgroundColor: '#54408C',
  },
  secondary: {
    backgroundColor: '#ebf2ef',
  },
  social: {
    backgroundColor: '#ffffff',
    borderColor: '#E8E8E8',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
  },
});
