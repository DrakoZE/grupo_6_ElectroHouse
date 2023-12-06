module.exports = (sequelize,DataTypes) => {
    
    const Avatar = sequelize.define("Avatar", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        avatar: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        created_at: "created_at",
        updated_at: "updated_at"
    });

    Avatar.associate = function(models){
        
        Avatar.hasOne(models.User, {
            as: "user",
            foreignKey:  "avatar_id"
        });

    }

    return Avatar;
}