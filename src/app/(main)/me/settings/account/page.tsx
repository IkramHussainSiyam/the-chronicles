import SettingsItem from "../_components/SettingsItem";

const SettingsAccountPage = () => {
  return (
    <div className="mb-10">
      <div className="space-y-5">
        <SettingsItem.Root>
          <SettingsItem.Title>Username and subdomain</SettingsItem.Title>
          <SettingsItem.Description>
            Your username and subdomain: <br />
            <span className="border-b text-foreground/75 border-b-foreground/75">
              the-chronicles.vercel.app/ikramhussainsiyam
            </span>
          </SettingsItem.Description>
          <SettingsItem.Input placeholder="@ikramhussainsiyam" />
          <SettingsItem.Footer className="flex items-center gap-3 justify-between text-sm">
            <SettingsItem.CharecterCount totalCount={20} currentCount={5} />
            <SettingsItem.Action disabled>Save</SettingsItem.Action>
          </SettingsItem.Footer>
        </SettingsItem.Root>

        <SettingsItem.Root>
          <SettingsItem.Title>Email</SettingsItem.Title>
          <SettingsItem.Input placeholder="ikramhussainsiyam@gmail.com" />
          <SettingsItem.Footer className="flex items-center gap-3 justify-between text-sm">
            <div></div>
            <SettingsItem.Action disabled>Save</SettingsItem.Action>
          </SettingsItem.Footer>
        </SettingsItem.Root>

        <SettingsItem.Root className="space-y-5">
          <div className="space-y-3">
            <SettingsItem.Title>Password</SettingsItem.Title>
            <SettingsItem.Input placeholder="*****************************" />
          </div>
          <div className="space-y-3">
            <SettingsItem.Title>Confirm Password</SettingsItem.Title>
            <SettingsItem.Input placeholder="*****************************" />
          </div>
          <SettingsItem.Footer className="flex items-center gap-3 justify-between text-sm">
            <div></div>
            <SettingsItem.Action disabled>Save</SettingsItem.Action>
          </SettingsItem.Footer>
        </SettingsItem.Root>
      </div>

      <div className="pt-10 mt-10 border-t border-border/50">
        <button className="text-sm text-muted-foreground flex flex-col items-start gap-1">
          <h5 className="text-destructive">Delete Account</h5>
          <p className="text-start">
            Deactivating will suspend your account until you sign back in.
          </p>
        </button>
      </div>
    </div>
  );
};

export default SettingsAccountPage;
