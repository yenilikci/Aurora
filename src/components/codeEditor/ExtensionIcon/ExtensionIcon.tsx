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
import CssIcon from '@/assets/images/css.svg';
import HtmlIcon from '@/assets/images/html.svg';
import JsonIcon from '@/assets/images/json.svg';
import SvgIcon from '@/assets/images/svg.svg';
import PngIcon from '@/assets/images/png.svg';
import IcoIcon from '@/assets/images/ico.svg';
import TxtIcon from '@/assets/images/txt.svg';
import MdIcon from '@/assets/images/md.svg';
import JsxIcon from '@/assets/images/jsx.svg';
import TsxIcon from '@/assets/images/tsx.svg';
import TsIcon from '@/assets/images/ts.svg';

type ExtensionIconProps = {
  extension?: string;
};

const style = {
  padding: '3px',
  height: '15px',
  width: '15px'
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
    case 'css':
      return <img src={CssIcon} style={style} />;
    case 'html':
      return <img src={HtmlIcon} style={style} />;
    case 'json':
      return <img src={JsonIcon} style={style} />;
    case 'svg':
      return <img src={SvgIcon} style={style} />;
    case 'ico':
      return <img src={IcoIcon} style={style} />;
    case 'md':
      return <img src={MdIcon} style={style} />;
    case 'txt':
      return <img src={TxtIcon} style={style} />;
    case 'png':
      return <img src={PngIcon} style={style} />;
    case 'tsx':
      return <img src={TsxIcon} style={style} />;
    case 'jsx':
      return <img src={JsxIcon} style={style} />;
    case 'ts':
      return <img src={TsIcon} style={style} />;
    default:
      return <img src={DefaultIcon} style={style} />;
  }
};

export default ExtensionIcon;
