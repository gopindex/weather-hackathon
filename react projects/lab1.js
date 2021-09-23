class Customer {
    constructor(name,member,memberType){
        this.name = name;
        this.member = member;
        this.memberType = memberType;
    }
    getName = function(name) {
        return this.name;
    }
    isMember = function(member) {
        return this.member;
    }
    setMember = function(status) {
        return this.member = status;
    }
    getMemberType = function(name) {
        return this.memberType;
    }
    setMemberType = function(name,memberType) {
        if(this.name == name){
            this.memberType = memberType;
        }
    }
}