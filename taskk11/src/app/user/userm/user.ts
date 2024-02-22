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
    id: null,
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


export interface User3 {

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
   
    addresses: any;
    pwd_confirm: any;
    pwd: any;
    designation_id: any;
    section_id: any;
    division_id: any;
    department_id: any;
    organization_id: number;
   
    image: any;
  


    is_license_active:any;
    leaving_date: any;
   
    first_name: any;
    joining_date:any;
       
        relative_mobile:any;
        national_insurance_number:any;
    id: number;
    organization: {
        id: number;
        title: string;
        description: string;
        logo_url: string | null;
        is_primary: number;
        establish_date: string;
        phone: string;
        address: string;
        website: string;
    };
    branch: {
        id: number;
        title: string;
    };
    division: {
        id: number;
        title: string;
    };
    department: {
        id: number;
        title: string;
    };
    section: {
        id: number;
        title: string;
    };
    sub_section: {
        id: number;
        title: string;
    };
    work_experiences: any[];
    qualifications: any[];
    certificates: any[];
    language: {
        id: number;
        type: string;
        code: string;
        title: string;
        is_primary: number;
        is_rtl: number;
        created_at: string;
        updated_at: string;
        created_by: string | null;
        updated_by: string | null;
        status_id: string;
    };
    designation: {
        id: number;
        designation_level_id: number | null;
        designation_grade_id: number | null;
        designation_zone_id: number | null;
        previous_designation_id: number | null;
        is_ceo: number;
        is_super_admin: number;
        code: string;
        title: string;
        order: number;
        created_at: string;
        updated_at: string;
        created_by: string | null;
        updated_by: string | null;
        status_id: string;
        external_system_reference_id: number | null;
        is_review_user: number | null;
    };
    settings: {
        id: number;
        user_id: string;
        default_language_id: string;
        is_two_factor_auth_enabled: number;
        timezone_id: number | null;
        otp: string | null;
        otp_generated_at: string | null;
        is_autolock: number;
        autolock_seconds: number | null;
        created_at: string;
        updated_at: string;
        created_by: string | null;
        updated_by: string | null;
        language: {
            id: number;
            type: string;
            code: string;
            title: string;
            is_primary: number;
            is_rtl: number;
            created_at: string;
            updated_at: string;
            created_by: string | null;
            updated_by: string | null;
            status_id: string;
        };
        timezone: string | null;
    };
    name: string;
    last_name: string;
    email: string;
    personal_email: string | null;
    mobile: string | null;
    office_number: string | null;
    ldap_username: string | null;
    image_url: string | null;
    image_title: string | null;
    image_size: string | null;
    image_ext: string | null;
    image_token: string | null;
    address: {
        id: number;
        user_id: string;
        country_id: number | null;
        type: string;
        address: string;
        street: string | null;
        city: string | null;
        state: string | null;
        zip: string | null;
        contact: string | null;
        relative_name: string | null;
        relationship: string | null;
        relative_mobile: string | null;
        created_at: string;
        updated_at: string;
        created_by: string | null;
        updated_by: string;
        country: string | null;
    }[];
    roles: {
        id: number;
        type: string;
        title: string;
        created_at: string;
        updated_at: string;
        created_by: {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            mobile: string | null;
            image: {
                title: string | null;
                url: string | null;
                token: string | null;
                size: string | null;
                ext: string | null;
                thumbnail_url: string | null;
            };
            designation: string;
            department: string;
            status: {
                id: number;
                title: {
                    id: number;
                    type: string;
                    code: string;
                    title: string;
                    is_primary: number;
                    is_rtl: number;
                    created_at: string;
                    updated_at: string;
                    created_by: string | null;
                    updated_by: string | null;
                    status_id: string;
                    pivot: {
                        status_id: string;
                        language_id: string;
                        title: string;
                    };
                }[];
               

}
        }
    }
        }