module.exports = (sequelize,DataTypes) => {
    
    const Seller = sequelize.define("Seller", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        seller: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    },
    {
        timestamps: false
    });

    Seller.associate = function(models){
        Seller.hasOne(models.User, {
            as: "users",
            foreignKey: "seller_id",
        });

    }

    return Seller;
}