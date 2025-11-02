import React from "react";
import AccountLinkButton from "@/app/components/AccountLinkButton";
import general from "../../../../public/img/dashboard/account/general.svg";
import subscription from "../../../../public/img/dashboard/account/subscription.svg";
import notification from "../../../../public/img/dashboard/account/notification.svg";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-9 px-36">
      <div>
        <p className="text-2xl font-bold">General Profile Setting</p>
        <p className="text-gray-500">
          Manage details, elevate your usage. Keep your information updated so
          we can tailor our offeringa and elevate your overall experience.
        </p>
      </div>
      <div className="flex gap-5 mt-10">
        <AccountLinkButton
          href="/dashboard/account/general"
          className=""
          content="General"
          imageSrc={general}
        />
        <AccountLinkButton
          href="/dashboard/account/subscription"
          className=""
          content="Subscription"
          imageSrc={subscription}
        />
        <AccountLinkButton
          href="/dashboard/account/notification"
          className=""
          content="Notification"
          imageSrc={notification}
        />
      </div>
      <main>{children}</main>
    </div>
  );
}
