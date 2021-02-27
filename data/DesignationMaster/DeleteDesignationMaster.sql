DELETE FROM [dbo].[DesignationMaster]
      WHERE [DId] = @p_DId;

SELECT SCOPE_IDENTITY() AS DId

