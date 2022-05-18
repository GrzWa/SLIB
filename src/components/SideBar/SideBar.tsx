import { Title } from '../common';
import { SideList } from './SideList';

export const SideBar = ({ data: { title, list } }) => {
  return (
    <>
      <Title
        title={title.title}
        underline={title.underline}
        text={title.text}
      />
      <SideList data={list}/>
    </>
  );
};
