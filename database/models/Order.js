module.exports = (sequelize,DataTypes) => {
    
    const Order = sequelize.define("Order", {
        amount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "active",
          },
    },
    {
        created_at: "created_at",
        updated_at: "updated_at"
    });

    return Order;
}