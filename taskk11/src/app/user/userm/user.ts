export interface User {
[x: string]: any;
date_of_birth: any;
is_send_welcome: any;
is_top_user: any;
is_auditor: any;
role_ids: any;
relative_address: any;
relationship: any;
relative_name: any;
contact: any;
zip: any;
country_id: any;
city: any;
state: any;
street: any;
address: any;
addresses: any;
pwd_confirm: any;
pwd: any;
designation_id: any;
section_id: any;
division_id: any;
department_id: any;
organization_id: number;
mobile: any;
office_number: any;
personal_email: any;
image: any;
email: any;
is_license_active:any;
leaving_date: any;
last_name: any;
first_name: any;
joining_date:any;
    id:number;
    relative_mobile:any;
    national_insurance_number:any;
}

export interface User2 {
    
organization: {
    id: any;
    title: any;
    description: any;
    logo_url: any;
    is_primary: any;
    establish_date: any;
    phone: any;
    address: any;
    website: any;
};
branch: any;
division: {
    id: any;
    title: any;
};
department: {
    id: any;
    title: any;
};
section: {
    id: any;
    title: any;
};
sub_section: any;
work_experiences: any[];
qualifications: any[];
certificates: any[];
language: {
    id: any;
    type: any;
    code: any;
    title: any;
    is_primary: any;
    is_rtl: any;
    created_at: any;
    updated_at: any;
    created_by: any;
    updated_by: any;
    status_id: any;
};
designation: {
    id: any;
    designation_level_id: any;
    designation_grade_id: any;
    designation_zone_id: any;
    previous_designation_id: any;
    is_ceo: any;
    is_super_admin: any;
    code: any;
    title: any;
    order: any;
    created_at: any;
    updated_at: any;
    created_by: any;
    updated_by: any;
    status_id: any;
    external_system_reference_id: any;
    is_review_user: any;
};
settings: {
    id: any;
    user_id: any;
    default_language_id: any;
    is_two_factor_auth_enabled: any;
    timezone_id: any;
    otp: any;
    otp_generated_at: any;
    is_autolock: any;
    autolock_seconds: any;
    created_at: any;
    updated_at: any;
    created_by: any;
    updated_by: any;
    language: {
        id: any;
        type: any;
        code: any;
        title: any;
        is_primary: any;
        is_rtl: any;
        created_at: any;
        updated_at: any;
        created_by: any;
        updated_by: any;
        status_id: any;
    };
    timezone: any;
};
name: any;
last_name: any;
email: any;
personal_email: any;
mobile: any;
office_number: any;
ldap_username: any;
image_url: any;
image_title: any;
image_size: any;
image_ext: any;
image_token: any;
address: {
    id: any;
    user_id: any;
    country_id: any;
    type: any;
    address: any;
    street: any;
    city: any;
    state: any;
    zip: any;
    contact: any;
    relative_name: any;
    relationship: any;
    relative_mobile: any;
    created_at: any;
    updated_at: any;
    created_by: any;
    updated_by: any;
    country: any;
}[];
roles: {
    id: any;
    type: any;
    title: any;
    created_at: any;
    updated_at: any;
    created_by: {
        id: any;
        first_name: any;
        last_name: any;
        email: any;
        mobile: any;
        image: {
            title: any;
            url: any;
            token: any;
            size: any;
            ext: any;
            thumbnail_url: any;
        };
        designation: any;
        department: any;
        status: {
            id: any;
            title: {
                id: any;
                type: any;
                code: any;
                title: any;
                is_primary: any;
                is_rtl: any;
                created_at: any;
                updated_at: any;
                created_by: any;
                updated_by: any;
                status_id: any;
                pivot: {
                    status_id: any;
                    language_id: any;
                    title: any;
                };
            }[];
            label: any;
            is_active: any;
            is_inactive: any;
        };
    };
    updated_by: {
        id: any;
        first_name: any;
        last_name: any;
        email: any;
        mobile: any;
        image: {
            title: any;
            url: any;
            token: any;
            size: any;
            ext: any;
            thumbnail_url: any;
        };
        designation: any;
        department: any;
        status: {
            id: any;
            title: {
                id: any;
                type: any;
                code: any;
                title: any;
                is_primary: any;
                is_rtl: any;
                created_at: any;
                updated_at: any;
                created_by: any;
                updated_by: any;
                status_id: any;
                pivot: {
                    status_id: any;
                    language_id: any;
                    title: any;
                };
            }[];
            label: any;
            is_active: any;
            is_inactive: any;
        };
    };
    status: {
        id: any;
        title: {
            id: any;
            type: any;
            code: any;
            title: any;
            is_primary: any;
            is_rtl: any;
            created_at: any;
            updated_at: any;
            created_by: any;
            updated_by: any;
            status_id: any;
            pivot: {
                status_id: any;
                language_id: any;
                title: any;
            };
        }[];
        label: any;
        is_active: any;
        is_inactive: any;
    };
}[];
user_id: any;
is_license_active: any;
is_top_user: any;
is_auditor: any;
is_section_head: any;
audit_categories: any[];
user_license: any;
reporting_user: any;
status: {
    id: any;
    title: {
        id: any;
        type: any;
        code: any;
        title: any;
        is_primary: any;
        is_rtl: any;
        created_at: any;
        updated_at: any;
        created_by: any;
        updated_by: any;
        status_id: any;
        pivot: {
            status_id: any;
            language_id: any;
            title: any;
        };
    }[];
    label: any;
    is_active: any;
    is_inactive: any;
};
date_of_birth: any;
national_insurance_number: any;
joining_date: any;
leaving_date: any;


}