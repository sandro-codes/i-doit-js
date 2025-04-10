export default class Constants {
    public readonly OBJECT_TYPES = {
        SERVER: 'C__OBJTYPE__SERVER',
        CLIENT: 'C__OBJTYPE__CLIENT',
    } as const;

    public readonly CATEGORY_TYPES = {
        CATG: {
            GLOBAL: 'C__CATG__GLOBAL',
            OPERATING_SYSTEM: 'C__CATG__OPERATING_SYSTEM',
            ACCOUNTING: 'C__CATG__ACCOUNTING',
            IP: 'C__CATG__IP',
            CONTACT: 'C__CATG__CONTACT',
            MODEL: 'C__CATG__MODEL',
            OTRS_FOLDER: 'C__CATG__OTRS_FOLDER',
            OTRS_FAQ: 'C__CATG__OTRS_FAQ',
            OTRS_TICKETS: 'C__CATG__OTRS_TICKETS',
            LOCATION: 'C__CATG__LOCATION',
        },
        CATS: {
            EMERGENCY_PLAN: 'C__CATS__EMERGENCY_PLAN',
            EMERGENCY_PLAN_ATTRIBUTE: 'C__CATS__EMERGENCY_PLAN_ATTRIBUTE',
            EMERGENCY_PLAN_LINKED_OBJECTS: 'C__CATS__EMERGENCY_PLAN_LINKED_OBJECTS'
        }
    } as const;

    public readonly RELATION_TYPES = {
        SOFTWARE: {
            CONSTANT: 'C__RELATION_TYPE__SOFTWARE',
            ID: 1
        },
        CLUSTER_SERVICE: {
            CONSTANT: 'C__RELATION_TYPE__CLUSTER_SERVICE',
            ID: 2
        },
        BACKUP: {
            CONSTANT: 'C__RELATION_TYPE__BACKUP',
            ID: 3
        },
        ADMIN: {
            CONSTANT: 'C__RELATION_TYPE__ADMIN',
            ID: 4
        },
        USER: {
            CONSTANT: 'C__RELATION_TYPE__USER',
            ID: 5
        },
        CLUSTER_MEMBERSHIPS: {
            CONSTANT: 'C__RELATION_TYPE__CLUSTER_MEMBERSHIPS',
            ID: 6
        },
        POWER_CONSUMER: {
            CONSTANT: 'C__RELATION_TYPE__POWER_CONSUMER',
            ID: 7
        },
        NETWORK_PORT: {
            CONSTANT: 'C__RELATION_TYPE__NETWORK_PORT',
            ID: 8
        },
        VIRTUAL_MACHINE: {
            CONSTANT: 'C__RELATION_TYPE__VIRTUAL_MACHINE',
            ID: 9
        },
        LOCATION: {
            CONSTANT: 'C__RELATION_TYPE__LOCATION',
            ID: 10
        },
        UNIVERSAL_INTERFACE: {
            CONSTANT: 'C__RELATION_TYPE__UNIVERSAL_INTERFACE',
            ID: 11
        },
        IP_ADDRESS: {
            CONSTANT: 'C__RELATION_TYPE__IP_ADDRESS',
            ID: 12
        },
        CONTROLLER_FC_PORT: {
            CONSTANT: 'C__RELATION_TYPE__CONTROLLER_FC_PORT',
            ID: 13
        },
        CONNECTORS: {
            CONSTANT: 'C__RELATION_TYPE__CONNECTORS',
            ID: 14
        },
        LDEV_CLIENT: {
            CONSTANT: 'C__RELATION_TYPE__LDEV_CLIENT',
            ID: 15
        },
        GROUP_MEMBERSHIPS: {
            CONSTANT: 'C__RELATION_TYPE__GROUP_MEMBERSHIPS',
            ID: 16
        },
        PERSON_ASSIGNED_GROUPS: {
            CONSTANT: 'C__RELATION_TYPE__PERSON_ASSIGNED_GROUPS',
            ID: 17
        },
        DEFAULT: {
            CONSTANT: 'C__RELATION_TYPE__DEFAULT',
            ID: 18
        },
        DATABASE_ACCESS: {
            CONSTANT: 'C__RELATION_TYPE__DATABASE_ACCESS',
            ID: 19
        },
        DATABASE_LINK: {
            CONSTANT: 'C__RELATION_TYPE__DATABASE_LINK',
            ID: 20
        },
        DATABASE_GATEWAY: {
            CONSTANT: 'C__RELATION_TYPE__DATABASE_GATEWAY',
            ID: 21
        },
        DATABASE_INSTANCE: {
            CONSTANT: 'C__RELATION_TYPE__DATABASE_INSTANCE',
            ID: 22
        },
        IT_SERVICE_COMPONENT: {
            CONSTANT: 'C__RELATION_TYPE__IT_SERVICE_COMPONENT',
            ID: 23
        },
        REPLICATION_PARTNER: {
            CONSTANT: 'C__RELATION_TYPE__REPLICATION_PARTNER',
            ID: 24
        },
        SOA_COMPONENTS: {
            CONSTANT: 'C__RELATION_TYPE__SOA_COMPONENTS',
            ID: 25
        }
    } as const;

    public readonly LOGBOOK_SOURCES = {
        INTERNAL: {
            CONSTANT: 'C__LOGBOOK_SOURCE__INTERNAL',
            ID: 1
        },
        EXTERNAL: {
            CONSTANT: 'C__LOGBOOK_SOURCE__EXTERNAL',
            ID: 2
        },
        USER: {
            CONSTANT: 'C__LOGBOOK_SOURCE__USER',
            ID: 3
        },
        ALL: {
            CONSTANT: 'C__LOGBOOK_SOURCE__ALL',
            ID: 4
        },
        RT: {
            CONSTANT: 'C__LOGBOOK_SOURCE__RT',
            ID: 1001
        },
        JDISC: {
            CONSTANT: 'C__LOGBOOK_SOURCE__JDISC',
            ID: 1004
        },
        IMPORT: {
            CONSTANT: 'C__LOGBOOK_SOURCE__IMPORT',
            ID: 1005
        }
    } as const;

    public readonly LOGBOOK_ALERT_LEVEL = {
        INFORMATION: {
            CONSTANT: 'C__LOGBOOK__ALERT_LEVEL__0',
            ID: 1
        },
        LOW: {
            CONSTANT: 'C__LOGBOOK__ALERT_LEVEL__1',
            ID: 2
        },
        MIDDLE: {
            CONSTANT: 'C__LOGBOOK__ALERT_LEVEL__2',
            ID: 3
        },
        HIGH: {
            CONSTANT: 'C__LOGBOOK__ALERT_LEVEL__3',
            ID: 4
        }
    } as const;

    public readonly RECORD_STATUS = {
        NORMAL: 'C__RECORD_STATUS__NORMAL',
        TEMPLATE: 'C__RECORD_STATUS__TEMPLATE',
        MASS_CHANGES_TEMPLATE: 'C__RECORD_STATUS__MASS_CHANGES_TEMPLATE',
        ARCHIVED: 'C__RECORD_STATUS__ARCHIVED',
        DELETED: 'C__RECORD_STATUS__DELETED',
        PURGE: 'C__RECORD_STATUS__PURGE',
    } as const;
}

const constants = new Constants();

export type ObjectType = typeof constants.OBJECT_TYPES[keyof typeof constants.OBJECT_TYPES];
export type RelationType = typeof constants.RELATION_TYPES[keyof typeof constants.RELATION_TYPES];
export type LogbookSourceType = typeof constants.LOGBOOK_SOURCES[keyof typeof constants.LOGBOOK_SOURCES];
export type LogbookAlertLevelType = typeof constants.LOGBOOK_ALERT_LEVEL[keyof typeof constants.LOGBOOK_ALERT_LEVEL];
export type RecordStatusType = typeof constants.RECORD_STATUS[keyof typeof constants.RECORD_STATUS];
export type GlobalCategory = typeof constants.CATEGORY_TYPES['CATG'][keyof typeof constants.CATEGORY_TYPES['CATG']];
export type SpecificCategory = typeof constants.CATEGORY_TYPES['CATS'][keyof typeof constants.CATEGORY_TYPES['CATS']];