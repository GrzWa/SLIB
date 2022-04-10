export const MenuItem = ({ item }: any) => {
  return (
    <div key={item} style={{ textAlign: `center`, fontSize: `0.8em` }}>
      {item}
    </div>
  );
};
