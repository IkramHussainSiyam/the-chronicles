import ThemeSwitcher from "~/components/common/ThemeSwitcher";
import SettingsItem from "../_components/SettingsItem";

const GeneralSettingsPage = () => {
  return (
    <div>
      <SettingsItem.Root className="flex flex-col md:flex-row md:items-center md:gap-2 justify-between">
        <SettingsItem.Title>Change Application Theme</SettingsItem.Title>
        <ThemeSwitcher />
      </SettingsItem.Root>
    </div>
  );
};

export default GeneralSettingsPage;
