import ContentsCards from '@components/ui/Cards/ContentsCards';
import ProfileCard from '@components/ui/Cards/ProfileCard';
import Section from '@components/ui/Utils/Section';

const page: React.FC = () => {
  return (
    <>
      <Section>
        <ProfileCard />
      </Section>
      <Section mt={'mt-14'}>
        <ContentsCards />
      </Section>
    </>
  );
};

export default page;
