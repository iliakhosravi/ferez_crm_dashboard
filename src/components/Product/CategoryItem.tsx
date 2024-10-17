import { Button } from "antd";
import { FC } from "react";
import { iCategory } from "../../hooks/useCategory";

const CategoryItem: FC<{
  category: iCategory;
  selected?: boolean;
  onSelect: (cat: iCategory) => void;
}> = ({ category, selected = false, onSelect }) => {
  const handleSelect = () => {
    onSelect(category);
  };
  return (
    <Button onClick={handleSelect} type={`${selected ? "primary" : "dashed"}`}>
      <h3>{category.name}</h3>
    </Button>
  );
};

export default CategoryItem;
