import Layout from '@/layout/Layout';
import { styled } from '@mui/system';
import ProgrammingLanguageList from '@/components/home/ProgrammingLanguageList/ProgrammingLanguageList';

const HomeContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.background,
}));

const WelcomeMessage = styled('div')(({ theme }) => ({
  padding: '15px',
  fontSize: '30px',
  color: theme.font,
}));

const Home = () => {
  return (
    <Layout>
      <HomeContainer>
        <WelcomeMessage>Welcome to the Aurora</WelcomeMessage>
        <ProgrammingLanguageList />
      </HomeContainer>
    </Layout>
  );
};

export default Home;
