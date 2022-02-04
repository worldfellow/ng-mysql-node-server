var DataTypes = require("sequelize").DataTypes;
var _account_lists = require("./account_lists");
var _allowance_options = require("./allowance_options");
var _allowances = require("./allowances");
var _announcement_employees = require("./announcement_employees");
var _announcements = require("./announcements");
var _appraisals = require("./appraisals");
var _assets = require("./assets");
var _attendance_employees = require("./attendance_employees");
var _award_types = require("./award_types");
var _awards = require("./awards");
var _branches = require("./branches");
var _commissions = require("./commissions");
var _company_policies = require("./company_policies");
var _complaints = require("./complaints");
var _custom_questions = require("./custom_questions");
var _deduction_options = require("./deduction_options");
var _departments = require("./departments");
var _deposits = require("./deposits");
var _designations = require("./designations");
var _documents = require("./documents");
var _ducument_uploads = require("./ducument_uploads");
var _employee_documents = require("./employee_documents");
var _employees = require("./employees");
var _event_employees = require("./event_employees");
var _events = require("./events");
var _expense_types = require("./expense_types");
var _expenses = require("./expenses");
var _failed_jobs = require("./failed_jobs");
var _favorites = require("./favorites");
var _genrate_payslip_options = require("./genrate_payslip_options");
var _goal_trackings = require("./goal_trackings");
var _goal_types = require("./goal_types");
var _holidays = require("./holidays");
var _income_types = require("./income_types");
var _indicators = require("./indicators");
var _interview_schedules = require("./interview_schedules");
var _ip_restricts = require("./ip_restricts");
var _job_application_notes = require("./job_application_notes");
var _job_applications = require("./job_applications");
var _job_categories = require("./job_categories");
var _job_on_boards = require("./job_on_boards");
var _job_stages = require("./job_stages");
var _jobs = require("./jobs");
var _landing_page_sections = require("./landing_page_sections");
var _leave_types = require("./leave_types");
var _leaves = require("./leaves");
var _loan_options = require("./loan_options");
var _loans = require("./loans");
var _meeting_employees = require("./meeting_employees");
var _meetings = require("./meetings");
var _messages = require("./messages");
var _migrations = require("./migrations");
var _model_has_permissions = require("./model_has_permissions");
var _model_has_roles = require("./model_has_roles");
var _other_payments = require("./other_payments");
var _overtimes = require("./overtimes");
var _password_resets = require("./password_resets");
var _pay_slips = require("./pay_slips");
var _payees = require("./payees");
var _payers = require("./payers");
var _payment_types = require("./payment_types");
var _payslip_types = require("./payslip_types");
var _permissions = require("./permissions");
var _promotions = require("./promotions");
var _resignations = require("./resignations");
var _role_has_permissions = require("./role_has_permissions");
var _roles = require("./roles");
var _saturation_deductions = require("./saturation_deductions");
var _set_salaries = require("./set_salaries");
var _settings = require("./settings");
var _termination_types = require("./termination_types");
var _terminations = require("./terminations");
var _ticket_replies = require("./ticket_replies");
var _tickets = require("./tickets");
var _time_sheets = require("./time_sheets");
var _trainers = require("./trainers");
var _training_types = require("./training_types");
var _trainings = require("./trainings");
var _transfer_balances = require("./transfer_balances");
var _transfers = require("./transfers");
var _travels = require("./travels");
var _users = require("./users");
var _warnings = require("./warnings");

function initModels(sequelize) {
  var account_lists = _account_lists(sequelize, DataTypes);
  var allowance_options = _allowance_options(sequelize, DataTypes);
  var allowances = _allowances(sequelize, DataTypes);
  var announcement_employees = _announcement_employees(sequelize, DataTypes);
  var announcements = _announcements(sequelize, DataTypes);
  var appraisals = _appraisals(sequelize, DataTypes);
  var assets = _assets(sequelize, DataTypes);
  var attendance_employees = _attendance_employees(sequelize, DataTypes);
  var award_types = _award_types(sequelize, DataTypes);
  var awards = _awards(sequelize, DataTypes);
  var branches = _branches(sequelize, DataTypes);
  var commissions = _commissions(sequelize, DataTypes);
  var company_policies = _company_policies(sequelize, DataTypes);
  var complaints = _complaints(sequelize, DataTypes);
  var custom_questions = _custom_questions(sequelize, DataTypes);
  var deduction_options = _deduction_options(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var deposits = _deposits(sequelize, DataTypes);
  var designations = _designations(sequelize, DataTypes);
  var documents = _documents(sequelize, DataTypes);
  var ducument_uploads = _ducument_uploads(sequelize, DataTypes);
  var employee_documents = _employee_documents(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var event_employees = _event_employees(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var expense_types = _expense_types(sequelize, DataTypes);
  var expenses = _expenses(sequelize, DataTypes);
  var failed_jobs = _failed_jobs(sequelize, DataTypes);
  var favorites = _favorites(sequelize, DataTypes);
  var genrate_payslip_options = _genrate_payslip_options(sequelize, DataTypes);
  var goal_trackings = _goal_trackings(sequelize, DataTypes);
  var goal_types = _goal_types(sequelize, DataTypes);
  var holidays = _holidays(sequelize, DataTypes);
  var income_types = _income_types(sequelize, DataTypes);
  var indicators = _indicators(sequelize, DataTypes);
  var interview_schedules = _interview_schedules(sequelize, DataTypes);
  var ip_restricts = _ip_restricts(sequelize, DataTypes);
  var job_application_notes = _job_application_notes(sequelize, DataTypes);
  var job_applications = _job_applications(sequelize, DataTypes);
  var job_categories = _job_categories(sequelize, DataTypes);
  var job_on_boards = _job_on_boards(sequelize, DataTypes);
  var job_stages = _job_stages(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var landing_page_sections = _landing_page_sections(sequelize, DataTypes);
  var leave_types = _leave_types(sequelize, DataTypes);
  var leaves = _leaves(sequelize, DataTypes);
  var loan_options = _loan_options(sequelize, DataTypes);
  var loans = _loans(sequelize, DataTypes);
  var meeting_employees = _meeting_employees(sequelize, DataTypes);
  var meetings = _meetings(sequelize, DataTypes);
  var messages = _messages(sequelize, DataTypes);
  var migrations = _migrations(sequelize, DataTypes);
  var model_has_permissions = _model_has_permissions(sequelize, DataTypes);
  var model_has_roles = _model_has_roles(sequelize, DataTypes);
  var other_payments = _other_payments(sequelize, DataTypes);
  var overtimes = _overtimes(sequelize, DataTypes);
  var password_resets = _password_resets(sequelize, DataTypes);
  var pay_slips = _pay_slips(sequelize, DataTypes);
  var payees = _payees(sequelize, DataTypes);
  var payers = _payers(sequelize, DataTypes);
  var payment_types = _payment_types(sequelize, DataTypes);
  var payslip_types = _payslip_types(sequelize, DataTypes);
  var permissions = _permissions(sequelize, DataTypes);
  var promotions = _promotions(sequelize, DataTypes);
  var resignations = _resignations(sequelize, DataTypes);
  var role_has_permissions = _role_has_permissions(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var saturation_deductions = _saturation_deductions(sequelize, DataTypes);
  var set_salaries = _set_salaries(sequelize, DataTypes);
  var settings = _settings(sequelize, DataTypes);
  var termination_types = _termination_types(sequelize, DataTypes);
  var terminations = _terminations(sequelize, DataTypes);
  var ticket_replies = _ticket_replies(sequelize, DataTypes);
  var tickets = _tickets(sequelize, DataTypes);
  var time_sheets = _time_sheets(sequelize, DataTypes);
  var trainers = _trainers(sequelize, DataTypes);
  var training_types = _training_types(sequelize, DataTypes);
  var trainings = _trainings(sequelize, DataTypes);
  var transfer_balances = _transfer_balances(sequelize, DataTypes);
  var transfers = _transfers(sequelize, DataTypes);
  var travels = _travels(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var warnings = _warnings(sequelize, DataTypes);

  permissions.belongsToMany(roles, { as: 'role_id_roles', through: role_has_permissions, foreignKey: "permission_id", otherKey: "role_id" });
  roles.belongsToMany(permissions, { as: 'permission_id_permissions', through: role_has_permissions, foreignKey: "role_id", otherKey: "permission_id" });
  model_has_permissions.belongsTo(permissions, { as: "permission", foreignKey: "permission_id"});
  permissions.hasMany(model_has_permissions, { as: "model_has_permissions", foreignKey: "permission_id"});
  role_has_permissions.belongsTo(permissions, { as: "permission", foreignKey: "permission_id"});
  permissions.hasMany(role_has_permissions, { as: "role_has_permissions", foreignKey: "permission_id"});
  model_has_roles.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(model_has_roles, { as: "model_has_roles", foreignKey: "role_id"});
  role_has_permissions.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(role_has_permissions, { as: "role_has_permissions", foreignKey: "role_id"});

  return {
    account_lists,
    allowance_options,
    allowances,
    announcement_employees,
    announcements,
    appraisals,
    assets,
    attendance_employees,
    award_types,
    awards,
    branches,
    commissions,
    company_policies,
    complaints,
    custom_questions,
    deduction_options,
    departments,
    deposits,
    designations,
    documents,
    ducument_uploads,
    employee_documents,
    employees,
    event_employees,
    events,
    expense_types,
    expenses,
    failed_jobs,
    favorites,
    genrate_payslip_options,
    goal_trackings,
    goal_types,
    holidays,
    income_types,
    indicators,
    interview_schedules,
    ip_restricts,
    job_application_notes,
    job_applications,
    job_categories,
    job_on_boards,
    job_stages,
    jobs,
    landing_page_sections,
    leave_types,
    leaves,
    loan_options,
    loans,
    meeting_employees,
    meetings,
    messages,
    migrations,
    model_has_permissions,
    model_has_roles,
    other_payments,
    overtimes,
    password_resets,
    pay_slips,
    payees,
    payers,
    payment_types,
    payslip_types,
    permissions,
    promotions,
    resignations,
    role_has_permissions,
    roles,
    saturation_deductions,
    set_salaries,
    settings,
    termination_types,
    terminations,
    ticket_replies,
    tickets,
    time_sheets,
    trainers,
    training_types,
    trainings,
    transfer_balances,
    transfers,
    travels,
    users,
    warnings,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
