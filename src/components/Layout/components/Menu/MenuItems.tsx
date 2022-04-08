import { MenuItem } from './MenuItem';

export const MenuItems = ({ data }: any) => {
  console.log(data);
  return (
    <>
      <div>Menu Items:</div>
      {data?.map(({ item, index }: any) => (
        <div key={`${index}${item}2`}>
          {/* <MenuItem key={index} item={item} /> */}
          Here
          {item}
        </div>
      ))}
    </>
  );
};
