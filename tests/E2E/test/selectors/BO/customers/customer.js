module.exports = {
  Customer: {
    customer_menu: '//*[@id="subtab-AdminParentCustomer"]/a',
    customers_subtab: '//*[@id="subtab-AdminCustomers"]/a',
    new_customer_button: '//*[@id="page-header-desc-configuration-add"]',
    social_title_button: '//*[@id="customer_gender_id_0"]',
    first_name_input: '//*[@id="customer_first_name"]',
    last_name_input: '//*[@id="customer_last_name"]',
    email_address_input: '//*[@id="customer_email"]',
    password_input: '//*[@id="customer_password"]',
    days_select: '//*[@id="customer_birthday_day"]',
    month_select: '//*[@id="customer_birthday_month"]',
    years_select: '//*[@id="customer_birthday_year"]',
    save_button: '//*[@id="main-div"]//button[contains(text(),"Save")]',
    customer_filter_by_email_input: '//*[@id="customer_email"]',
    email_address_value: '//*[@id="customer_filter_form"]//tbody//td[%ID]',
    reset_button: '//*[@id="table-customer"]//button[@name="submitResetcustomer"]',
    edit_button: '//*[@id="customer_grid_table"]//a[@data-original-title="Edit"]',
    dropdown_toggle: '//*[@id="customer_grid_table"]//a[@data-toggle="dropdown"]',
    delete_button: '//*[@id="customer_grid_table"]//a[contains(@class,"js-delete-customer-row-action")]',
    delete_first_option: '//input[@id="delete_customers_delete_method_0"]',
    delete_second_option: '//input[@id="delete_customers_delete_method_1"]',
    delete_confirmation_button: '//*[@id="customer_grid_delete_customers_modal"]//button[contains(@class, "js-submit-delete-customers")]',
    select_customer: '//table[@id="customer_grid_table"]//td[contains(@class, "bulk_action-type")]/div/label',
    bulk_actions_button: '//button[contains(@class, "js-bulk-actions-btn")]',
    bulk_actions_delete_button: '//button[@id="customer_grid_bulk_action_delete_selection"]',
    empty_list_icon: '//*[@id="customer_grid_table"]//div[contains(@class, "grid-table-empty")]/p[2]',
    customer_link: '//*[@id="table-address"]//td[contains(text(),"%ID")]',
    Partner_offers: '//label[contains(@for,"customer_is_partner_offers_subscribed_1")]',
    first_name_value:'//*[@id="customer_grid_table"]//tr[%ID]/td[4]',
    last_name_value:'//*[@id="customer_grid_table"]//tr[%ID]/td[5]',
    valid_orders: '#main-div .card:nth-child(2) .card-body .badge-success',
    view_button: '//*[@id="customer_grid_table"]//td[contains(@class, "action-type")]//div[contains(@class, "dropdown-menu")]//a[contains(@class, "js-link-row-action")]',
    total_amount: '#main-div .card:nth-child(2) .card-body>.row>.col',
  }
};