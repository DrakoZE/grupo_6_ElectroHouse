module.exports = (sequelize,DataTypes) => {
    
    const Color = sequelize.define("Color", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        color: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        code: {
            type: DataTypes.STRING(10),
            allowNull: true
        }
    },
    {
        timestamps: false
    });

    Color.associate = function(models){
        
        Color.belongsToMany(models.Product, {
            through: "gamma",
            foreignKey: "color_id",
            otherKey: "product_id",
            timestamps: false
        });

    }

    return Color;
}