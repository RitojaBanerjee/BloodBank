import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-primary">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            In a Blood Bank application, the admin role is crucial for managing
            and overseeing various aspects of the system. Here's an outline of
            the responsibilities and functionalities associated with the admin
            role in a Blood Bank app: User Management: Create, modify, and
            delete user accounts for blood bank staff, donors, and recipients.
            Assign roles and permissions to different users within the system.
            Donor Management: View and manage donor profiles. Monitor donor
            eligibility criteria and ensure compliance with health and safety
            standards. Track donor blood type, donation history, and contact
            information. Recipient Management: Manage recipient profiles and
            their medical information. Coordinate blood requests and match
            available donors with recipient needs. Inventory Management: Monitor
            and manage the blood inventory. Track blood units, expiration dates,
            and storage conditions. Receive and update inventory levels based on
            donations and withdrawals. Blood Donation Drives: Organize and
            schedule blood donation drives or events. Coordinate with external
            organizations for collaborative drives. Notification System:
            Implement a notification system to alert donors about upcoming
            donation drives or urgent blood needs. Notify staff about low
            inventory levels or critical system issues. Reporting and Analytics:
            Generate reports on blood inventory levels, donor statistics, and
            overall system performance. Analyze data to identify trends,
            patterns, and areas for improvement. Security and Access Control:
            Ensure the security of sensitive donor and recipient information.
            Implement access controls and encryption mechanisms to protect data.
            System Configuration: Configure system settings, such as donation
            eligibility criteria, notification preferences, and user roles.
            Support and Training: Provide support to blood bank staff and users.
            Conduct training sessions for new users on system functionalities
            and best practices. Emergency Response: Establish protocols for
            emergency situations and ensure the rapid response to urgent blood
            needs. Coordinate with hospitals and medical facilities during
            emergencies. Audit Trails: Maintain detailed logs and audit trails
            for all activities within the system. Ensure accountability and
            traceability of actions performed by admin and other users. By
            fulfilling these responsibilities, the admin role plays a critical
            part in the efficient and effective operation of a Blood Bank
            application, ensuring a seamless and secure blood donation and
            distribution process.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
