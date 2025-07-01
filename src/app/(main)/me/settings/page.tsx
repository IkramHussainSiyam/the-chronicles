import SettingsItem from "./_components/SettingsItem";

const SettingsProfilePage = () => {
  return (
    <div className="space-y-5 mb-10">
      <SettingsItem.Root>
        <SettingsItem.Title>Avatar</SettingsItem.Title>
        <SettingsItem.Input placeholder="my-avatar.com.png" />
        <SettingsItem.Footer className="flex items-center gap-3 justify-between text-sm">
          <div></div>
          <SettingsItem.Action disabled>Save</SettingsItem.Action>
        </SettingsItem.Footer>
      </SettingsItem.Root>

      <SettingsItem.Root>
        <SettingsItem.Title>Banner</SettingsItem.Title>
        <SettingsItem.Input placeholder="my-banner.com.png" />
        <SettingsItem.Footer className="flex items-center gap-3 justify-between text-sm">
          <div></div>
          <SettingsItem.Action disabled>Save</SettingsItem.Action>
        </SettingsItem.Footer>
      </SettingsItem.Root>

      <SettingsItem.Root>
        <SettingsItem.Title>Name</SettingsItem.Title>
        <SettingsItem.Input placeholder="Ikram Hussain Siyam" />
        <SettingsItem.Footer className="flex items-center gap-3 justify-between text-sm">
          <SettingsItem.CharecterCount totalCount={20} currentCount={5} />
          <SettingsItem.Action disabled>Save</SettingsItem.Action>
        </SettingsItem.Footer>
      </SettingsItem.Root>

      <SettingsItem.Root>
        <SettingsItem.Title>Short Bio</SettingsItem.Title>
        <SettingsItem.Textarea placeholder="Software Engineer." />
        <SettingsItem.Footer className="flex items-center gap-3 justify-between text-sm">
          <SettingsItem.CharecterCount totalCount={20} currentCount={5} />
          <SettingsItem.Action disabled>Save</SettingsItem.Action>
        </SettingsItem.Footer>
      </SettingsItem.Root>
    </div>
  );
};

export default SettingsProfilePage;
