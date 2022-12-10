import DefaultIcon from '@/assets/images/default.svg';
import JSIcon from '@/assets/images/js.svg';
import CLangIcon from '@/assets/images/c.svg';
import CPlusPlusIcon from '@/assets/images/c-plus-plus.svg';
import CSharpIcon from '@/assets/images/c-sharp.svg';
import GoIcon from '@/assets/images/go.svg';
import RustIcon from '@/assets/images/rust.svg';
import JavaIcon from '@/assets/images/java.svg';
import PhpIcon from '@/assets/images/php.svg';
import RubyIcon from '@/assets/images/ruby.svg';
import PythonIcon from '@/assets/images/python.svg';

type ExtensionIconProps = {
  extension?: string;
};

const style = {
  padding: '3px',
  height: '15px',
  width: '15px',
};

const ExtensionIcon = (props: ExtensionIconProps) => {
  switch (props.extension) {
    case 'js':
      return <img src={JSIcon} style={style} />;
    case 'cpp':
      return <img src={CPlusPlusIcon} style={style} />;
    case 'cs':
      return <img src={CSharpIcon} style={style} />;
    case 'c':
      return <img src={CLangIcon} style={style} />;
    case 'go':
      return <img src={GoIcon} style={style} />;
    case 'rs':
      return <img src={RustIcon} style={style} />;
    case 'java':
      return <img src={JavaIcon} style={style} />;
    case 'php':
      return <img src={PhpIcon} style={style} />;
    case 'rb':
      return <img src={RubyIcon} style={style} />;
    case 'py':
      return <img src={PythonIcon} style={style} />;
    default:
      return <img src={DefaultIcon} style={style} />;
  }
};

export default ExtensionIcon;
