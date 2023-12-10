module.exports = (sequelize,DataTypes) => {
    
    const Seller = sequelize.define("Seller", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        seller: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        timestamps: false
    });

    Seller.associate = function(models){
        Seller.hasOne(models.User, {
            as: "users",
            foreignKey: "sellerId",
        });

    }

    return Seller;
}