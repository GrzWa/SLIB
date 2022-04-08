export const MenuItem = ({ item }: any) => {
  return (
    <div key={item} style={{ textAlign: `center`, fontSize: `0.6em` }}>
      {item}
    </div>
  );
};
