"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRights = exports.roles = void 0;
const allRoles = {
    student: [],
    admin: ["canAnnounceResult", "canAcceptProposal", "canRejectProposal"],
};
const roles = Object.keys(allRoles);
exports.roles = roles;
const roleRights = new Map(Object.entries(allRoles));
exports.roleRights = roleRights;
//# sourceMappingURL=roles.js.map