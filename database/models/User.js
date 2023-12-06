module.exports = (sequelize,DataTypes) => {
    
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        avatarId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING(15),
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        permissionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at"
    });

    User.associate = function(models){

        User.belongsTo(models.Avatar, {
            as: "avatars",
            foreignKey: "avatar_id"
        });

        User.belongsTo(models.Seller, {
            as: "sellers",
            foreignKey: "seller_id",
        });

        User.belongsToMany(models.Product, {
            through: models.Order,
            foreignKey: "user_id",
            otherKey: "product_id"
        });

        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "user_id"
        });
    }

    return User;
}