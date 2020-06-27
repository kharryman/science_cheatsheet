import { StyleSheet } from 'react-native';
import Katex from 'react-native-katex';
 
const styles = StyleSheet.create({
  katex: {
    flex: 1,
  }
});
 
const inlineStyle =`
html, body {
  display: flex;
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
}
.katex {
  font-size: 4em;
  margin: 0;
  display: flex;
}
`;
 
export default function MathExpression(props) {
  const [loaded, setLoaded] = useState(false);
  const [expression, setExpression] = useState(props.expression);//"c=\\pm\\sqrt{a^2 + b^2}"
  setTimeout(() => setExpression(), 2000);//"d=\\pm\\sqrt{a^2 + b^2}"
 
  return (
      <Katex
          expression={expression}
          style={styles.katex}
          inlineStyle={inlineStyle}
          displayMode={false}
          throwOnError={false}
          errorColor="#f00"
          macros={{}}
          colorIsTextColor={false}
          onLoad={() => setLoaded(true)}
          onError={() => console.error('Error')}
      />
  );
}