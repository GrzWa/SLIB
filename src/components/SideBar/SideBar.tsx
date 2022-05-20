import { Title } from '../common';
import { SideList } from './SideList';

export const SideBar = ({ data: { title, list } }) => {
  return (
    <>
      <Title underline={title.underline} text={title.text}>
        {title.title}
      </Title>
      <SideList data={list} />
    </>
  );
};
