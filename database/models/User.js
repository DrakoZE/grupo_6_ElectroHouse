module.exports = (sequelize,DataTypes) => {
    
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING(25)
        },
        surname: {
            type: DataTypes.STRING(25)
        },
        username: {
            type: DataTypes.STRING(15)
        },
        email: {
            type: DataTypes.STRING(50)
        },
        password: {
            type: DataTypes.STRING(200)
        },
        avatar: {
            type: DataTypes.STRING(255)
        },
        seller: {
            type: DataTypes.STRING(15)
        }
    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at"
    });

    User.associate = function(models){

        User.belongsToMany(models.Product, {
            as: "orders",
            through: models.Order,
            foreignKey: "user_id",
            otherKey: "product_id"
        });

        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "userId"
        });
    }

    return User;
}