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

const ProgrammingLanguageList = () => {
  const IconArray = [
    JSIcon,
    CLangIcon,
    CPlusPlusIcon,
    CSharpIcon,
    GoIcon,
    RustIcon,
    JavaIcon,
    PhpIcon,
    RubyIcon,
    PythonIcon,
  ];

  const style = {
    padding: '10px',
    height: '50px',
    width: '50px',
  };

  return (
    <div>
      {IconArray.map((icon, index) => (
        <img key={index} src={icon} style={style} />
      ))}
    </div>
  );
};

export default ProgrammingLanguageList;
