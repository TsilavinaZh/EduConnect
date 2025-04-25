import React, { useState } from "react";
import { View, Text } from "react-native";
import { Tabs } from "@ant-design/react-native";
import AdminPublishFrom from "./AdminPublishFormPage";
import ProCulte from "./CultePublish";

const AdminForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [{ title: "Publication" }, { title: "Culte" }];

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        tabs={tabs}
        page={activeTab}
        onChange={(tab, index) => setActiveTab(index)}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <AdminPublishFrom />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ProCulte />
        </View>
      </Tabs>
    </View>
  );
};

export default AdminForm;
