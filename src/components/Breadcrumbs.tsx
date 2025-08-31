import Icon from "./Icon";

export const Breadcrumbs = () => {
  return (
    <div className="flex gap-1 text-accent-gray mt-1 app-container mx-auto px-5">
      <span>Home</span>
      <Icon name="arrow" />
      <span>Blog</span>
      <Icon name="arrow" />
    </div>
  );
};
